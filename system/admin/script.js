// Import Firebase configuration and Firestore methods
import { db } from './firebase-config.js'; // Make sure this path is correct
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';

document.addEventListener('DOMContentLoaded', function() {
    // SIDEBAR DROPDOWN
    const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
    const sidebar = document.getElementById('sidebar');

    allDropdown.forEach(item => {
        const a = item.parentElement.querySelector('a:first-child');
        a.addEventListener('click', function (e) {
            e.preventDefault();

            if (!this.classList.contains('active')) {
                allDropdown.forEach(i => {
                    const aLink = i.parentElement.querySelector('a:first-child');
                    aLink.classList.remove('active');
                    i.classList.remove('show');
                });
            }

            this.classList.toggle('active');
            item.classList.toggle('show');
        });
    });

    // SIDEBAR COLLAPSE
    const toggleSidebar = document.querySelector('nav .toggle-sidebar');
    const allSideDivider = document.querySelectorAll('#sidebar .divider');

    function toggleSidebarState() {
        sidebar.classList.toggle('hide');

        if (sidebar.classList.contains('hide')) {
            allSideDivider.forEach(item => {
                item.textContent = '-';
            });

            allDropdown.forEach(item => {
                const a = item.parentElement.querySelector('a:first-child');
                a.classList.remove('active');
                item.classList.remove('show');
            });
        } else {
            allSideDivider.forEach(item => {
                item.textContent = item.dataset.text;
            });
        }
    }

    toggleSidebar.addEventListener('click', toggleSidebarState);

    sidebar.addEventListener('mouseleave', function () {
        if (this.classList.contains('hide')) {
            allDropdown.forEach(item => {
                const a = item.parentElement.querySelector('a:first-child');
                a.classList.remove('active');
                item.classList.remove('show');
            });
            allSideDivider.forEach(item => {
                item.textContent = '-';
            });
        }
    });

    sidebar.addEventListener('mouseenter', function () {
        if (this.classList.contains('hide')) {
            allDropdown.forEach(item => {
                const a = item.parentElement.querySelector('a:first-child');
                a.classList.remove('active');
                item.classList.remove('show');
            });
            allSideDivider.forEach(item => {
                item.textContent = item.dataset.text;
            });
        }
    });

    // PROFILE DROPDOWN
    const profile = document.querySelector('nav .profile');
    const imgProfile = profile.querySelector('img');
    const dropdownProfile = profile.querySelector('.profile-link');

    imgProfile.addEventListener('click', function () {
        dropdownProfile.classList.toggle('show');
    });

    // MENU
    const allMenu = document.querySelectorAll('main .content-data .head .menu');

    allMenu.forEach(item => {
        const icon = item.querySelector('.icon');
        const menuLink = item.querySelector('.menu-link');

        icon.addEventListener('click', function () {
            menuLink.classList.toggle('show');
        });
    });

    window.addEventListener('click', function (e) {
        if (!imgProfile.contains(e.target) && !dropdownProfile.contains(e.target)) {
            dropdownProfile.classList.remove('show');
        }

        allMenu.forEach(item => {
            const icon = item.querySelector('.icon');
            const menuLink = item.querySelector('.menu-link');

            if (e.target !== icon && !menuLink.contains(e.target)) {
                menuLink.classList.remove('show');
            }
        });
    });

    // PROGRESSBAR
    const allProgress = document.querySelectorAll('main .card .progress');

    allProgress.forEach(item => {
        item.style.setProperty('--value', item.dataset.value);
    });

    // Function to populate the student records table
    async function populateStudentRecords() {
        const tableBody = document.querySelector('#student-table tbody');

        try {
            // Fetch student data from the Firestore 'violators' collection
            const querySnapshot = await getDocs(collection(db, 'violators'));

            // Clear existing rows
            tableBody.innerHTML = '';

            // Populate table rows
            querySnapshot.forEach((doc) => {
                const student = doc.data();
                const row = document.createElement('tr');
                row.dataset.id = doc.id; // Use data attribute to store document ID
                row.innerHTML = `
                    <td>${student.course || ''}</td>
                    <td>${student.department || ''}</td>
                    <td>${student.gsuite || ''}</td>
                    <td>${student.name || ''}</td>
                    <td>${student.srCode || ''}</td>
                    <td>${student.timestamp ? student.timestamp.toDate().toLocaleDateString() : ''}</td>
                    <td>${student.violations || ''}</td>
                    <td>${student.yearSection || ''}</td>
                    <td>
                        <button class="btn-update" onclick="updateStudent('${doc.id}')">Update</button>
                        <button class="btn-delete" onclick="deleteStudent('${doc.id}')">Delete</button>
                        <button class="btn-save" onclick="saveStudent('${doc.id}')" style="display:none;">Save</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        } catch (error) {
            console.error("Error fetching student records: ", error);
        }
    }

    // Call the function to populate the student records table initially
    populateStudentRecords();
});
