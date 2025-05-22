// Replace with your real data (fetch from server or export .json file)
const messageData = [
  { username: 'User1', messages: 120 },
  { username: 'User2', messages: 95 },
  { username: 'User3', messages: 80 }
];

const voiceData = [
  { username: 'User1', minutes: 45 },
  { username: 'User4', minutes: 30 },
  { username: 'User2', minutes: 15 }
];

const messageChart = new Chart(
  document.getElementById('messageChart'),
  {
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
  }
);

const voiceChart = new Chart(
  document.getElementById('voiceChart'),
  {
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
  }
);
