document.addEventListener('DOMContentLoaded', () => {
    const stations = [
      'Gita Mandir', 'Subhash Bridge', 'Naroda', 'CTM', 'Kalupur',
      'Maninagar', 'Sardar Nagar', 'Shahibaug', 'Bapunagar', 'Memnagar',
      'Vastrapur', 'Thaltej', 'Satellite', 'Iskcon', 'Paldi',
      'Vasna', 'Sarkhej', 'Mithakhali', 'Kankaria', 'Acher',
      'Ambawadi', 'Ashram Road', 'Koba', 'Shilaj', 'Adalaj'
    ];
  
    // Populate dropdown options
    const fromSelect = document.getElementById('from');
    const toSelect = document.getElementById('to');
  
    stations.forEach(station => {
      const optionFrom = document.createElement('option');
      optionFrom.value = station;
      optionFrom.textContent = station;
      fromSelect.appendChild(optionFrom);
  
      const optionTo = document.createElement('option');
      optionTo.value = station;
      optionTo.textContent = station;
      toSelect.appendChild(optionTo);
    });
  
    // Station distances (in kilometers)
    const stationDistances = {
      'Gita Mandir': { 'Subhash Bridge': 5, 'Naroda': 10, 'Kalupur': 3, 'Maninagar': 8, 'Sardar Nagar': 12, 'Shahibaug': 7, 'Bapunagar': 9, 'Memnagar': 11, 'Vastrapur': 15, 'Thaltej': 17, 'Satellite': 18, 'Iskcon': 6, 'Paldi': 4, 'Vasna': 10, 'Sarkhej': 14, 'Mithakhali': 5, 'Kankaria': 6, 'Acher': 20, 'Ambawadi': 6, 'Ashram Road': 7, 'Koba': 25, 'Shilaj': 22, 'Adalaj': 30 },
      'Subhash Bridge': { 'Gita Mandir': 5, 'Naroda': 12, 'Kalupur': 8, 'Maninagar': 11, 'Sardar Nagar': 13, 'Shahibaug': 4, 'Bapunagar': 11, 'Memnagar': 15, 'Vastrapur': 16, 'Thaltej': 18, 'Satellite': 20, 'Iskcon': 8, 'Paldi': 10, 'Vasna': 8, 'Sarkhej': 19, 'Mithakhali': 10, 'Kankaria': 9, 'Acher': 22, 'Ambawadi': 9, 'Ashram Road': 11, 'Koba': 28, 'Shilaj': 25, 'Adalaj': 35 },
      // Add distances for all stations in the same way...
    };
  
    // Calculate the distance and price
    document.getElementById('calculate').addEventListener('click', () => {
      const from = fromSelect.value;
      const to = toSelect.value;
  
      if (from && to) {
        if (stationDistances[from] && stationDistances[from][to] !== undefined) {
          const distance = stationDistances[from][to];
          const price = calculatePrice(distance);
  
          document.getElementById('distance').textContent = distance;
          document.getElementById('price').textContent = price;
        } else {
          alert('Distance not available between the selected stations!');
        }
      } else {
        alert('Please select both stations!');
      }
    });
  
    // Calculate the price based on distance
    function calculatePrice(distance) {
      const pricePerKm = 10; // Price per kilometer
      return distance * pricePerKm;
    }
  
    // Handle the payment process
    document.getElementById('pay').addEventListener('click', () => {
      alert('Payment process initiated!');
    });
  
    // Back button
    document.getElementById('back').addEventListener('click', () => {
      window.history.back();
    });
  });
  