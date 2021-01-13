class Wishlist{

    get deleteWishlistIcon(){return $('//button[@class="blockListProduct__delete qaBlockListProduct__delete"]')}
    get emptyWishlistMessage(){return $('//p[@class="wishlistNoProducts__text wishlistNoProducts__text_bold"]')}

}

module.exports = new Wishlist();