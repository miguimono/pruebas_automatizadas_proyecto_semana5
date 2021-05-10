Feature: Posts
    
    @user1 @web
    Scenario: As a Ghost user, I want to create a Posts
        Given I navigate to page "<URL>"
        When I enter "<USERNAME>" into input field having css selector ".email.ember-text-field.gh-input.ember-view"
        When I enter "<PASSWORD>" into input field having css selector ".password.ember-text-field.gh-input.ember-view"
        Then I click on element having css selector ".login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view"
        Then I click on element having css selector ".gh-nav-list-new.relative"
        Then I click on element having css selector "a.permalink.gh-list-data.gh-post-list-title.ember-view"
        Then I enter " modificado" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
        Then I click on element having css selector "a.blue.link.fw4.flex.items-center.ember-view"
        Then I click on element having css selector "a.gh-secondary-action.gh-nav-new-post.ember-view"
        Then I click on element having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
        Then I enter "Post de prueba 2" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
        Then I click on element having css selector "a.blue.link.fw4.flex.items-center.ember-view"
        Then I wait for 1 seconds
        Then I click on element having css selector ".gh-btn"
        Then I click on element having css selector "a.blue.link.fw4.flex.items-center.ember-view"
