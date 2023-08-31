
import AmazonPage from "./AmazonPage"

describe ('login to Amazon and search', function () {

    it("login to Amazon", () => {
        const Amazon = new AmazonPage()
        Amazon.navigate();
        Amazon.searchbox();
        Amazon.featureddropdown();
        Amazon.bestSeller(); 
       
       
    })

    
        

})
