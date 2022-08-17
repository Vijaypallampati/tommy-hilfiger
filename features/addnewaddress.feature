Feature: The Tommy Website login and add new address

    Scenario Outline: As a user, I can log into the secure area

        Given I am on the login page
        When I login with <username> and <password>
        Then I should see a flash message saying <message>
        Then I click on logged in user
        Then I Fill address with firstname <firstname> lastname <lastname> address1 <address1> address2 <address2> city <city> zipcode <zipcode> phone1 <phone1> and <country>
        Examples:
            | username                | password   | message | firstname | lastname   | address1       | address2 | city      | zipcode | phone1     | country   |
            | tommyhilfiger@gmail.com | helloworld | Hoi!    | Vijay     | Pallampati | Venbergsemolen | 83       | Eindhoven | 5612 DX | 0686423888 | Nederland |
