export function addItem(item) {
    console.log("%cItem:", "color: rgba(7, 212, 255, 1); font-size: 1.5rem; margin-top: 1rem;")
    // console.table(item)
    console.log(item)
    const spreadBody = document.getElementById('spreadBody')
    let labelEl = document.createElement('div')
    let itemFragileClass

    if (item.fragile != false) {
        itemFragileClass = 'fragile'
    } else {
        itemFragileClass = 'not-fragile'
    }

    const formattedLabel = `
        <div class="storage-item-label">
            <h3>${item.name}</h3>
            <h6>Physical Location: ${item.location} <span class="${itemFragileClass}">Fragile!</span></h6>

            <img class="item-image" src="${item.images[0]}" alt="Image of ${item.name}">
            <p>${item.description}</p>
        </div>
    `


    labelEl.classList.add('storage-item-label-data')
    labelEl.innerHTML = formattedLabel
    spreadBody.appendChild(labelEl)
}