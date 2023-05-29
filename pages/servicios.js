function addServicios(params = {}){
    const template = document.querySelector("#servicios-template");
    const container = document.querySelector(".servicios_content-card");

    template.content.querySelector(".servicios_card-img").src = params.img;
    template.content.querySelector(".servicios_card-content-title").textContent = params.title;
    template.content.querySelector(".servicios_card-content-description").textContent = params.description;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function getServicios(){
    return fetch("https://cdn.contentful.com/spaces/d77dx6zf9ugw/environments/master/entries?access_token=NjtOmja8JQbOcQOl0UkmURXuCV8idqZl3kQ4OGxR5fc&content_type=servicios"
    ).then((res) => {
        return res.json()
    }).then((data) => {
        const imagen = data.includes.Asset.map((i) => {return i.fields.file.url});
        
        const fieldsCollection = data.items.map((item, contador) => {
            return {
                img: imagen[contador],
                title: item.fields.titulo,
                description: item.fields.descripcion,
            }
        })
        return fieldsCollection;
    })
}

function main(){
    showHeader(document.querySelector(".header"));
    getServicios().then((item) => {
        for (const s of item) {
            addServicios(s);
        }
    })
    showFooter(document.querySelector(".footer"));
}

main();