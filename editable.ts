
    document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
        event.preventDefault();
    
        const nameElement = document.getElementById('name') as HTMLInputElement;
        const fatherElement = document.getElementById('FatherName') as HTMLInputElement;
        const emailElement = document.getElementById('email') as HTMLInputElement;
        const phoneElement = document.getElementById('phone') as HTMLInputElement;
        const qualificationElement = document.getElementById('qualification') as HTMLInputElement;
        const experienceElement = document.getElementById('experience') as HTMLInputElement;
        const skillsElement = document.getElementById('Skills') as HTMLInputElement;
    
        if (nameElement && fatherElement && emailElement && phoneElement && qualificationElement && experienceElement && skillsElement) {
            const name = nameElement.value;
            const fathername = fatherElement.value;
            const email = emailElement.value;
            const phone = phoneElement.value;
            const qualification = qualificationElement.value;
            const experience = experienceElement.value;
            const skills = skillsElement.value;
    
            const dynamicResume = `
                <h2>Resume</h2>
                <p><strong>Name:</strong> <span id="edit-name" class="editable">${name}</span></p>
                <p><strong>Father's Name:</strong> <span id="edit-FatherName" class="editable">${fathername}</span></p>
                <p><strong>Email:</strong> <span id="edit-email" class="editable">${email}</span></p>
                <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable">${phone}</span></p>
    
                <h3>Qualification:</h3>
                <p id="edit-qualification" class="editable">${qualification}</p>
    
                <h3>Experience:</h3>
                <p id="edit-experience" class="editable">${experience}</p>
    
                <h3>Skills:</h3>
                <p id="edit-skills" class="editable">${skills}</p>
            `;
    
            const dynamicResumeElement = document.getElementById('dynamicResume');
            if (dynamicResumeElement) {
                dynamicResumeElement.innerHTML = dynamicResume;
                makeEditable();
            } else {
                console.log('Dynamic Resume element is missing');
            }
        } else {
            console.log('One or more form elements are missing');
        }
    });
    
    function makeEditable() {
        const editableElements = document.querySelectorAll('.editable');
        editableElements.forEach(element => {
            element.addEventListener('click', function() {
                const currentElement = element as HTMLElement;
                const currentValue = currentElement.textContent || "";
    
                if (currentElement.tagName === "P" || currentElement.tagName === 'SPAN') {
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.value = currentValue;
                    input.classList.add('editing');
    
                    input.addEventListener('blur', function() {
                        currentElement.textContent = input.value;
                        currentElement.style.display = 'inline';
                        input.remove();
                    });
    
                    input.addEventListener('keydown', function(event) {
                        if (event.key === 'Enter') {
                            input.blur();
                        }
                    });
    
                    currentElement.style.display = 'none';
                    currentElement.parentNode?.insertBefore(input, currentElement);
                    input.focus();
                }
            });
        });
    }
    