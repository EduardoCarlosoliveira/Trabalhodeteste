const {Builder, By, Key, until} = require("selenium-webdriver")

async function abrirSite(){
    try{
        let driver = await new Builder().forBrowser("chrome").build()
        await driver.manage().window().maximize()
        await driver.get("https://fdrclothing.com/")
        await driver.sleep(5000)

        //Mudando idioma  
        const language = await driver.findElements(By.css("a[href='#']"))
        await language[2].click()
        await driver.sleep(5000)
        await language[1].click()
        
        //Acessando Página inexistente
        await driver.get("https://fdrclothing.com/naoexisto")
        await driver.sleep(5000)
        const homeLogo = await driver.findElement(By.css("a[href='https://www.fdrclothing.com']"))
        await homeLogo.click()
        await driver.sleep(5000)


        //Fazendo Login
        const accountIcon = await driver.findElement(By.css("a[href='https://fdrclothing.com/minha-conta/']"))
        await accountIcon.click()
        await driver.sleep(5000)
        const userName = await driver.findElement(By.id("username"))
        await userName.sendKeys(" ")
        const password = await driver.findElement(By.id("password"))
        await password.sendKeys(" ")
        await driver.sleep(3000)
        const acessButon = await driver.findElement(By.name("login"))
        await acessButon.click()

        //Navegaçãp
        const homeNav = await driver.findElement(By.css("a[href='https://fdrclothing.com']"))
        await homeNav.click()
        await driver.sleep(5000)
        const shopNav = await driver.findElement(By.css("a[href='https://fdrclothing.com/shop/']"))
        await shopNav.click()
        await driver.sleep(3000)

        //Redirecionar ao WhatsApp
        await driver.wait(until.elementLocated(By.css("a[href='https://wa.me/message/KPFA2U35CITFF1']")))
        await driver.executeScript(`document.evaluate("//a[@href='https://wa.me/message/KPFA2U35CITFF1']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.click()`)


    } catch (e) {
        console.log(e)
    }
}

abrirSite()