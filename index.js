


fetch('/table.json')
    .then(res => res.json())
    .then(data => {
        
        const items = data.table; 
            const tBodyEl = document.querySelector('tbody'); 
            let rows = ''; 
            items.forEach(ele => {
                rows += `
                    <tr class="tr-el">
                        <td>${ele.product}</td>
                        <td class="green">${ele.price}</td>
                        <td class="gold">${ele.count}</td>
                    </tr>
                `;
            });
            tBodyEl.innerHTML = rows; 
        
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });




