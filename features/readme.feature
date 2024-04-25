Feature: Readme
  In order to understand this code
  I need a readme

  Scenario: Find easter egg
    Given a github readme url
    When I load this page
    Then it should contain the text 'warren's cucumber'
