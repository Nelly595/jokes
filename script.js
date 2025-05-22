async function loadChartData() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();

    createMessageChart(data.messages);
    createVoiceChart(data.voice);
  } catch (error) {
    console.error('Failed to load chart data:', error);
  }
}

function createMessageChart(messageData) {
  new Chart(document.getElementById('messageChart'), {
    type: 'bar',
    data: {
      labels: messageData.map(user => user.username),
      datasets: [{
        label: 'Messages Sent',
        data: messageData.map(user => user.messages),
        backgroundColor: '#7c3aed'
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } }
    }
  });
}

function createVoiceChart(voiceData) {
  new Chart(document.getElementById('voiceChart'), {
    type: 'bar',
    data: {
      labels: voiceData.map(user => user.username),
      datasets: [{
        label: 'Voice Minutes',
        data: voiceData.map(user => user.minutes),
        backgroundColor: '#10b981'
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } }
    }
  });
}

// Kick it off
loadChartData();
