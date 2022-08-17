Feature: The Tommy Website login checks

    Scenario: As a user, check login failed
        Given I am on the login page
        Then I should see LoginPage error on username and password fields

    Scenario Outline: As a user, check login failed with username error
        Given I am on the login page
        Then I should see LoginPage error on username field and password is <password>

        Examples:
            | password |
            | 123456   |


    Scenario Outline: As a user, check login failed with password error
        Given I am on the login page
        Then I should see LoginPage error on password field and username is <username>

        Examples:
            | username                  |
            | Vijaypallampati@gmail.com |

    Scenario Outline: As a user, I am checking whether error message is prompted login with wrong username or password

        Given I am on the login page
        When I login with <username> and <password>
        Then I should see LoginPage error saying username or password is not matching

        Examples:
            | username                  | password |
            | Vijaypallampati@gmail.com | 12345678 |

