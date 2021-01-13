const HomePage = require("../pages/homePage")
const Wishlist = require("../pages/wishlist")
const testData = require("../testData/data")

describe("Shop the look test", function(){
    it("Launching the url", function(){
        browser.url('/');
        HomePage.cookiePopup.click();  
    });

    it("Accepting cookies", function(){
        HomePage.cookiePopup.click();      
    });

    it("Click on search and enter text for results", function(){
        HomePage.search.click();
        HomePage.search.waitForClickable({ timeout: 4000 });
        HomePage.search.addValue(testData.searchText);
        browser.keys("\uE007");      
    });

    it("Wait for list of items to load and heading to be displayed", function(){
        HomePage.headingList.waitForDisplayed({ timeout: 5000 });  
    });

    it("Validating if the list of items is displayed by checking its length", function(){
        HomePage.listOfItems.waitForExist({ timeout: 3000 });
        browser.pause(3000);
        // console.log(HomePage.items.length);
        expect(HomePage.items.length).to.be.greaterThan(1);      
    });

    it("Adding first item to wishlist", function(){
        HomePage.firstItemWishlist.click();      
    });

    it("Logging into the account", function(){
        HomePage.login.click();
        HomePage.email.addValue(testData.email);
        HomePage.password.addValue(testData.password);
        HomePage.registerButton.waitForClickable({ timeout: 4000 });
        HomePage.registerButton.click();      
    });

    it("Wait for page to load and adding item to wishlist", function(){
        HomePage.wishlistIcon.waitForExist({ timeout: 4000 });
        HomePage.wishlistIcon.click();         
    });

    it("Deleting the item from the wishlist", function(){ 
        Wishlist.deleteWishlistIcon.waitForExist({ timeout: 4000 });
        Wishlist.deleteWishlistIcon.click();
        console.log(Wishlist.emptyWishlistMessage.getText()); 
    });
});