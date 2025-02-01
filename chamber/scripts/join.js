const loadTimeInput = document.getElementById('loadTime');
    const currentTime = new Date().toISOString(); 
    loadTimeInput.value = currentTime;

    // Store the load time in localStorage
    localStorage.setItem('formLoadTime', currentTime);