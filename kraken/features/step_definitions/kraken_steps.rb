require 'kraken-mobile/monkeys/web/web_monkey'
require 'kraken-mobile/steps/general_steps'
require 'kraken-mobile/utils/k.rb'
require 'selenium-webdriver'
require 'uri'

Before do
  @driver = Selenium::WebDriver.for((ENV['BROWSER'] || 'chrome').to_sym)
end

Then(/^I click on modal element having css selector "(.*?)" and button having css selector "(.*?)"$/) do |modal, selector|
    modal = @driver.find_element(:css, modal)

    sleep 2
end

Then(/^I click on element having css selector "(.*?)"$/) do |selector|
    @driver.find_element(:css, selector).click
    sleep 2
end


# Hooks
AfterStep do |_scenario|
  path = "#{ENV[K::SCREENSHOT_PATH]}/#{SecureRandom.hex(12)}.png"
  @driver.save_screenshot(path)
  embed(path, 'image/png', File.basename(path))
end
