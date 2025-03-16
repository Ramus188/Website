document.addEventListener('DOMContentLoaded', () => {
    const onlineCountElement = document.getElementById('online-count');
    const readMoreButton = document.getElementById('read-more');
    const readMorePopup = document.getElementById('read-more-popup');
    const startPlayingButton = document.getElementById('start-playing');
    const startPlayingPopup = document.getElementById('start-playing-popup');
    const closeButtons = document.querySelectorAll('.close-popup');

    function fetchOnlinePlayers() {
        fetch('online.txt')
            .then(response => response.text())
            .then(data => {
                onlineCountElement.textContent = data;
            })
            .catch(error => console.error('Error fetching online players:', error));
    }

    setInterval(fetchOnlinePlayers, 1000);

    readMoreButton.addEventListener('click', () => {
        readMorePopup.style.display = 'block';
    });

    startPlayingButton.addEventListener('click', () => {
        startPlayingPopup.style.display = 'block';
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.style.display = 'none';
        });
    });

    document.querySelectorAll('.platform-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const platform = event.target.getAttribute('data-platform');
            window.open(`#${platform}-tutorial`, '_self');
        });
    });
});