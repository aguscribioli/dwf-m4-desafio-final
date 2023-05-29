function addBienvenida(params = {}){
    const template = document.querySelector("#bienvenida-template-home");
    const container = document.querySelector(".bienvenida-content");

    template.content.querySelector(".bienvenida-title-1").textContent = params.title;
    template.content.querySelector(".bienvenida-title-2").textContent = params.titleSpan;
    template.content.querySelector(".bienvenida-img-rocket").src = params.src;
    template.content.querySelector(".bienvenida-img-ellipse").src = params.srcMediaQuery;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function getBienvenida(){
    return fetch("https://cdn.contentful.com/spaces/d77dx6zf9ugw/environments/master/entries?access_token=NjtOmja8JQbOcQOl0UkmURXuCV8idqZl3kQ4OGxR5fc&content_type=bienvenida"
    ).then((res) => {
        return res.json();
    }).then((data) => {
        const imagenCentral = data.includes.Asset[1].fields.file.url;
        const imagenMediaquery = data.includes.Asset[0].fields.file.url;
        const fieldsCollection = data.items.map((item) => {
            return {
                title: item.fields.titulo,
                titleSpan: item.fields.tituloSpan,
                src: imagenCentral,
                srcMediaQuery: imagenMediaquery,
            }
        })
        return fieldsCollection;
    });
}

function addPresentacion (params = {}){
    const template = document.querySelector("#presentacion-template");
    const container = document.querySelector(".presentacion_content");

    template.content.querySelector(".presentacion_text-container-title").textContent = params.title;
    template.content.querySelector(".presentacion_text-container-description").textContent = params.description;
    template.content.querySelector(".presentacion_image").src = params.img;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function getPresentacion(){
    return fetch("https://cdn.contentful.com/spaces/d77dx6zf9ugw/environments/master/entries?access_token=NjtOmja8JQbOcQOl0UkmURXuCV8idqZl3kQ4OGxR5fc&content_type=presentacion"
    ).then((res) => {
        return res.json();
    }).then((data) => {
        const imagen = data.includes.Asset[0].fields.file.url;
        const fieldsCollection = data.items.map((item) => {
            return {
                title: item.fields.titulo,
                description: item.fields.descripcion,
                img: imagen,
            }
        })
        return fieldsCollection;
    });
}

function main(){
    getBienvenida().then((item)=>{
        for (const w of item) {
            addBienvenida(w);
        }
    })

    getPresentacion().then((item) => {
        for (const p of item) {
            addPresentacion(p);
        }
    })

    contactComponent(document.querySelector(".contacto"));
};

main();