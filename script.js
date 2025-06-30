 // Toggle sidebar on mobile
        const toggleSidebarMobile = document.getElementById('toggleSidebarMobile');
        const sidebar = document.getElementById('sidebar');
        
        toggleSidebarMobile.addEventListener('click', function() {
            sidebar.classList.toggle('show');
        });
        
        // Search functionality
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.getElementById('searchButton');
        const sholawatContainer = document.getElementById('sholawatContainer');
        const cards = sholawatContainer.getElementsByClassName('col-md-3');
        const sidebarLinks = document.querySelectorAll('.sidebar-link');
        
        function filterCards() {
            const searchTerm = searchInput.value.toLowerCase();
            
            for (let card of cards) {
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                if (title.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            }
        }
        
        searchButton.addEventListener('click', filterCards);
        searchInput.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                filterCards();
            }
        });
        
        // Sidebar link click to highlight card
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const title = this.getAttribute('data-title');
                
                // Remove active class from all cards
                document.querySelectorAll('.card').forEach(card => {
                    card.classList.remove('active-card');
                });
                
                // Find and highlight the matching card
                for (let card of cards) {
                    if (card.querySelector('.card-title').textContent === title) {
                        card.querySelector('.card').classList.add('active-card');
                        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        break;
                    }
                }
                
                // Close sidebar on mobile after selection
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('show');
                }
            });
        });
        
        // Click on card to highlight it
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', function() {
                document.querySelectorAll('.card').forEach(c => {
                    c.classList.remove('active-card');
                });
                this.classList.add('active-card');
            });
        });