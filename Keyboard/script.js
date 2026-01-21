const insert = document.querySelector("#insert")

window.addEventListener('keyup',(e) =>{
    insert.innerHTML = `<div class = color>
    <table>
        <tr>
            <th>Key</th>
            <th>key Code</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key === " " ? '" "' : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>
</div>`
})