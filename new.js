
        const searchInput = document.getElementById("search");
        const faqQuestions = document.querySelectorAll(".faq-questions");

        searchInput.addEventListener("input", function () {
            const searchTerm = searchInput.value.trim().toLowerCase();
            settings.style.display = "block"

            faqQuestions.forEach((faq) => {
                const question = faq.querySelector("h4").textContent.toLowerCase();
                const answer = faq.querySelector(".hidden").textContent.toLowerCase();

                if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                    faq.style.display = "block"; 
                } else {
                    faq.style.display = "none"; 
                }
            });
        });