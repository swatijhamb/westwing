class HomePage{

    get cookiePopup(){return $('#onetrust-accept-btn-handler')}
    get search(){return $('//input[@placeholder="Produktsuche..."]')} 
    get headingList(){return $('//h1[@class="RegularTitle__StyledPageTitle-zjo017-0 gCzFWF"]')}
    get listOfItems(){return $('//div[@class="ProductGrid__StyledGrid-zyj4tq-0 fjUkRM"]')}
    get items(){return this.listOfItems.$$('//div[@class="GenericProduct__StyledProductWrapper-sc-6ow56k-0 bikiTj"]')}
    get firstItemWishlist(){return this.items[1].$('//div[@class="WishlistIcon__StyledWishlistIconWrapper-sc-75dklq-0 jujCBZ"]')}
    get login(){return $('//button[@data-testid = "login_reg_switch_btn"]')}
    get email(){return $('//input[@data-testid="long-register-email-field"]')}
    get password(){return $('//input[@data-testid="long-register-password-field"]')}
    get registerButton(){return $('//button[@data-testid="login_reg_submit_btn"]')}
    get wishlistIcon(){return $('//div[@data-testid="wishlist-bubble"]')}

}

module.exports = new HomePage();