document.addEventListener('DOMContentLoaded', function () {
            const menuToggle = document.getElementById('menuToggle');
            const navLinks = document.getElementById('navLinks');

            // Toggle the mobile menu open/close
            menuToggle.addEventListener('click', function () {
                navLinks.classList.toggle('active');

                // Change the icon based on state
                const icon = menuToggle.querySelector('i');
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });

            // Close the menu when a link is clicked (mobile only)
            const links = navLinks.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', function () {
                    navLinks.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                });
            });
        });