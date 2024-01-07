document.addEventListener('DOMContentLoaded', function () {
    checkLoginStatus();
});

function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send registration data to the server
    // Update the URL to the correct path for your server
    fetch('http://localhost/Documents/tite/server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `action=register&username=${username}&password=${password}`,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(`Registration successful!\nUsername: ${username}`);
            login(username);
        } else {
            alert(`Registration failed: ${data.error}`);
        }
    });
}

function login(username) {
    // Send login data to the server
    // Update the URL to the correct path for your server
    fetch('http://localhost/Documents/tite/server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `action=login&username=${username}&password=${password}`,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showProfile(username);
        } else {
            alert(`Login failed: ${data.error}`);
        }
    });
}

function logout() {
    // Log out the user (clear session, cookies, etc.)
    // For simplicity, this example just reloads the page
    location.reload();
}

function checkLoginStatus() {
    // You would check with the server to determine if the user is logged in
    // For simplicity, this example assumes the user is not logged in

    // Display the appropriate section based on login status
    const isLoggedIn = false; // Replace with actual check
    if (isLoggedIn) {
        const username = 'JohnDoe'; // Replace with actual username
        showProfile(username);
    } else {
        showRegistrationForm();
    }
}

function showProfile(username) {
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
    document.getElementById('welcomeMessage').textContent = `Welcome, ${username}!`;
}

function showRegistrationForm() {
    document.getElementById('registration-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('profile').style.display = 'none';
}

function post() {
    const postInput = document.getElementById('postInput');
    const username = document.getElementById('loggedInUser').textContent;

    if (postInput.value.trim() !== '') {
        // Send post data to the server
        // Update the URL to the correct path for your server
        fetch('http://localhost/Documents/tite/server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `action=post&username=${username}&content=${postInput.value}`,
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Post successful!');
                postInput.value = '';
            } else {
                alert(`Post failed: ${data.error}`);
            }
        });
    } else {
        alert('Please enter something to post.');
    }
}
