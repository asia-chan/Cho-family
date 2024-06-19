document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const videoTitle = document.getElementById('videoTitle').value;
    const videoDescription = document.getElementById('videoDescription').value;
    const videoFile = document.getElementById('videoUpload').files[0];
    
    if (videoTitle && videoDescription && videoFile) {
        const videoList = document.getElementById('videoList');

        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');

        const videoElement = document.createElement('video');
        videoElement.controls = true;
        videoElement.src = URL.createObjectURL(videoFile);
        videoElement.width = 250;

        const videoTitleElement = document.createElement('h3');
        videoTitleElement.textContent = videoTitle;

        const videoDescriptionElement = document.createElement('p');
        videoDescriptionElement.textContent = videoDescription;

        videoItem.appendChild(videoElement);
        videoItem.appendChild(videoTitleElement);
        videoItem.appendChild(videoDescriptionElement);

        videoList.appendChild(videoItem);

        document.getElementById('uploadForm').reset();
    }
});

