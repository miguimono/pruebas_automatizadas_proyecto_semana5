Feature: Login in Ghost

    @user1 @web
    Scenario: As a Ghost user, I want to login
        Given I navigate to page "<URL>"
        When I enter "<USERNAME>" into input field having css selector ".email.ember-text-field.gh-input.ember-view"
        When I enter "<PASSWORD>" into input field having css selector ".password.ember-text-field.gh-input.ember-view"
        When I click on element having css selector ".login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view"
        Then I should see text "ghost"