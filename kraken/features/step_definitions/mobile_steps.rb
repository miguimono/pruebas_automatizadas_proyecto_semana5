require 'kraken-mobile/steps/mobile/kraken_steps'
require 'selenium-webdriver'

Before do
    @driver = Selenium::WebDriver.for((ENV['BROWSER'] || 'chrome').to_sym)
end

Then(/^I select option with value "(.*?)" for dropdown having css selector "(.*?)"$/) do |op_value, sel_id|
    drop = @driver.find_element(:css, sel_id)
    choose = Selenium::WebDriver::Support::Select.new(drop)
    choose.select_by(:value, op_value)
    sleep 2
end

Then(/^I enter "([^\"]*)" into input field having xpath "([^\"]*)"$/) do |text, xpath|
    @driver.find_element(:xpath, xpath).send_keys(text)
    sleep 2
end

Then(/^I click on element having xpath "([^\"]*)"$/) do |xpath|
    @driver.find_element(:xpath, xpath).click
    sleep 2
end

Then(/^I click on element with name "([^\"]*)"$/) do |name|
    @driver.find_element(name:, name).click
    sleep 2
end

Then(/^I click on first element list with css selector "([^\"]*)"$/) do |css_selector|
    list = @driver.find_element(css:, css_selector)
    list[1].click
    sleep 2
end