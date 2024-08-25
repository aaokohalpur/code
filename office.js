 // Toggle display based on radio button selection
        document.querySelectorAll('input[name="person"]').forEach((radio) => {
            radio.addEventListener('change', function() {
                if (this.value === 'father') {
                    document.getElementById('fatherDetails').classList.remove('hidden');
                    document.getElementById('motherDetails').classList.add('hidden');
                } else if (this.value === 'mother') {
                    document.getElementById('fatherDetails').classList.add('hidden');
                    document.getElementById('motherDetails').classList.remove('hidden');
                }
            });
        });

        // Show details based on selection
        function displayDetails() {
            const selectedPerson = document.querySelector('input[name="person"]:checked').value;

            if (selectedPerson === 'father') {
                const fatherNepali = document.getElementById('fatherNepali').value;
                const fatherEnglish = document.getElementById('fatherEnglish').value;
                const fatherCitizen = document.getElementById('fatherCitizen').value;
                const wardNumber = document.getElementById('permanentPlaceWardNumberFather').value;

                document.getElementById('displayNameNepali').textContent = `Father's Name (Nepali): ${fatherNepali}`;
                document.getElementById('displayNameEnglish').textContent = `Father's Name (English): ${fatherEnglish}`;
                document.getElementById('displayCitizen').textContent = `Father's Citizenship Number: ${fatherCitizen}`;
                document.getElementById('displayWardNumber').textContent = `Permanent Address Ward Number: ${wardNumber}`;
            } else if (selectedPerson === 'mother') {
                const motherNepali = document.getElementById('motherNepali').value;
                const motherEnglish = document.getElementById('motherEnglish').value;
                const motherCitizen = document.getElementById('motherCitizen').value;
                const wardNumber = document.getElementById('permanentPlaceWardNumberMother').value;

                document.getElementById('displayNameNepali').textContent = `Mother's Name (Nepali): ${motherNepali}`;
                document.getElementById('displayNameEnglish').textContent = `Mother's Name (English): ${motherEnglish}`;
                document.getElementById('displayCitizen').textContent = `Mother's Citizenship Number: ${motherCitizen}`;
                document.getElementById('displayWardNumber').textContent = `Permanent Address Ward Number: ${wardNumber}`;
            }

            // Show the results
            document.getElementById('displayResults').classList.remove('hidden');
        }
