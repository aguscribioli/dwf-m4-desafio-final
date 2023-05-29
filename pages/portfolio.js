function addPortfolioBienvenida (params = {}) {
    const template = document.querySelector("#portfolio-template-bienvenida");
    const container = document.querySelector(".portfolio-content-bienvenida");

    template.content.querySelector(".portfolio-title-1").textContent = params.title;
    template.content.querySelector(".portfolio-title-2").textContent = params.titleSpan;
    template.content.querySelector(".portfolio-img-briefcase").src = params.src;
    template.content.querySelector(".portfolio-img-ellipse").src = params.srcMediaQuery;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function getPortfolioBienvenida(){
    return fetch("https://cdn.contentful.com/spaces/d77dx6zf9ugw/environments/master/entries?access_token=NjtOmja8JQbOcQOl0UkmURXuCV8idqZl3kQ4OGxR5fc&content_type=portfolioBienvenida"
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

function addPortfolioCard (params = {}) {
    const template = document.querySelector("#portfolio-template-card");
    const container = document.querySelector(".portfolio-content-card");

    template.content.querySelector(".portfolio_card-img").src = params.img;
    template.content.querySelector(".portfolio_card-content-title").textContent = params.title;
    template.content.querySelector(".portfolio_card-content-description").textContent = params.description;
    template.content.querySelector(".portfolio_card-link").href = params.url;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function getPortfolioCard(){
    return fetch("https://cdn.contentful.com/spaces/d77dx6zf9ugw/environments/master/entries?access_token=NjtOmja8JQbOcQOl0UkmURXuCV8idqZl3kQ4OGxR5fc&content_type=portfolioCard"
    ).then((res) => {
        return res.json();
    }).then((data) => {
        const fieldsCollection = data.items.map((item) => {
            return {
                img: data.includes.Asset[0].fields.file.url,
                title: item.fields.titulo,
                description: item.fields.descripcion,
                url: item.fields.url,
            }
        })
        return fieldsCollection;
    })
}

function main() {
    showHeader(document.querySelector(".header"));
    showFooter(document.querySelector(".footer"));

    getPortfolioBienvenida().then((item) => {
        for (const i of item) {
            addPortfolioBienvenida(i);
        }
    })

    getPortfolioCard().then((item) => {
        for (const i of item) {
            addPortfolioCard(i);
        }
    })
}

main();