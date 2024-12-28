class Cart {

    get cartElement(): ChainablePromiseElement {
        return $("div[class='cartSection'] h3");
    }

    get checkoutBtn(): ChainablePromiseElement {
        return $("ul li button[class='btn btn-primary']:last-of-type");
    }
}

export default new Cart();
