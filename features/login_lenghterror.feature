Feature: The Tommy Website login checks with minimum password characters
  Scenario Outline: As a user, I am checking whether error message is prompted login with less number of characters in password

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see LoginPage error saying password should be minimum 5 to 20 characters

    Examples:
      | username                  | password |
      | Vijaypallampati@gmail.com | 12345678 |