const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await (await driver).get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('cross off movie ', async () => {

    let movieName = 'Movie'

       let textBox = await driver.findElement
    (By.xpath('//form/input'))

    
    await textBox.sendKeys(movieName)
    await driver.findElement(By.xpath(`//form/button`)).click()

    await driver.findElement(By.xpath(`//li/span[text()="${movieName}"]`)).click()

    await driver.sleep(2000)
}) 

test('Delete movie ', async () => {

    let movieName = 'Movie'

       let textBox = await driver.findElement
    (By.xpath('//form/input'))

    
    await textBox.sendKeys(movieName)
    await driver.findElement(By.xpath(`//form/button`)).click()

    await driver.findElement(By.id(`${movieName}`)).click()

    await driver.sleep(2000)
}) 

test('Notification ', async () => {

    let movieName = 'Movie'

       let textBox = await driver.findElement
    (By.xpath('//form/input'))

    
    await textBox.sendKeys(movieName)
    await driver.findElement(By.xpath(`//form/button`)).click()

    await driver.findElement(By.id(`${movieName}`)).click()

    let message = await driver.findElement(By.id(`message`)).getText()

    expect(message).toBe(`${movieName} deleted!`)


    await driver.sleep(2000)
}) 