import {account_create_elements} from "../support/pages/account_create.js"
import {account_create_messages} from "../support/pages/account_create.js"

const phoneNumber = [
    '0943883282@gmail.com', '0946327625@gmail.com', '0947020969@gmail.com', '0923415342@gmail.com', '091243352@gmail.com', '096525234@gmail.com',
    '0723453255@gmail.com', '0293452435@gmail.com', '0992541342@gmail.com', '0923452345@gmail.com', '093452345@gmail.com', '023485234@gmail.com',
    '23452345@gmail.com', '2345235@gmail.com', '234523452345@gmail.com', '234523452354@gmail.com', '234523452345@gmail.com', '0965245225234@gmail.com',
    '23452345@gmail.com', '23452345@gmail.com', '2345234523@gmail.com', '092345232345234545@gmail.com', '23452345@gmail.com', '24352345@gmail.com'
]
const random = phoneNumber[Math.floor(Math.random() * phoneNumber.length)];

var today = new Date();
var dd = String(today.getDate());
var mm = String(today.getMonth() + 1); //January is 0!
var yyyy = String(today.getFullYear());

describe('Invalid Birthday', function() {
    beforeEach(function() {
        cy.visit("https://www.facebook.com/r.php?next=https%3A%2F%2Fwww.facebook.com%2F&locale=vi_VN&display=page");
    });

    it('set birthday current date', function() {
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.EMAIL_MOBILE).type("fake@email.com");
        cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type("fake@email.com");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        // cy.get(account_create_elements.MONTH).select('Month');
        cy.get(account_create_elements.DAY).select(dd);
        cy.get(account_create_elements.MONTH).select(mm);
        cy.get(account_create_elements.YEAR).select(yyyy);
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.SELECT_YOUR_BIRTHDAY)).to.exist;
    });

    it('invalid date of February', function() {
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.EMAIL_MOBILE).type("fake@email.com");
        cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type("fake@email.com");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        // cy.get(account_create_elements.MONTH).select('Month');
        cy.get(account_create_elements.DAY).select('31');
        cy.get(account_create_elements.MONTH).select('2');
        cy.get(account_create_elements.YEAR).select(yyyy);
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.SELECT_YOUR_BIRTHDAY)).to.exist;
    });

    it('invalid date of April', function() {
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.EMAIL_MOBILE).type("fake@email.com");
        cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type("fake@email.com");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        // cy.get(account_create_elements.MONTH).select('Month');
        cy.get(account_create_elements.DAY).select('31');
        cy.get(account_create_elements.MONTH).select('4');
        cy.get(account_create_elements.YEAR).select(yyyy);
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.SELECT_YOUR_BIRTHDAY)).to.exist;
    });

    it('invalid date of June', function() {
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.EMAIL_MOBILE).type("fake@email.com");
        cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type("fake@email.com");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        // cy.get(account_create_elements.MONTH).select('Month');
        cy.get(account_create_elements.DAY).select('31');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select(yyyy);
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.SELECT_YOUR_BIRTHDAY)).to.exist;
    });

    it('invalid date of September', function() {
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.EMAIL_MOBILE).type("fake@email.com");
        cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type("fake@email.com");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        // cy.get(account_create_elements.MONTH).select('Month');
        cy.get(account_create_elements.DAY).select('31');
        cy.get(account_create_elements.MONTH).select('9');
        cy.get(account_create_elements.YEAR).select(yyyy);
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.SELECT_YOUR_BIRTHDAY)).to.exist;
    });

    it('invalid date of November', function() {
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.EMAIL_MOBILE).type("fake@email.com");
        cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type("fake@email.com");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        // cy.get(account_create_elements.MONTH).select('Month');
        cy.get(account_create_elements.DAY).select('31');
        cy.get(account_create_elements.MONTH).select('11');
        cy.get(account_create_elements.YEAR).select(yyyy);
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.SELECT_YOUR_BIRTHDAY)).to.exist;
    });

    it('invalid date of non-leap year', function() {
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.EMAIL_MOBILE).type("fake@email.com");
        cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type("fake@email.com");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        // cy.get(account_create_elements.MONTH).select('Month');
        cy.get(account_create_elements.DAY).select('29');
        cy.get(account_create_elements.MONTH).select('4');
        cy.get(account_create_elements.YEAR).select("2019");
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.SELECT_YOUR_BIRTHDAY)).to.exist;
    });

});

describe('Invalid email address', () => {
    beforeEach(function() {
        cy.visit("https://www.facebook.com/r.php?next=https%3A%2F%2Fwww.facebook.com%2F&locale=vi_VN&display=page");
    });
    it('email with no domain', function() {
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.EMAIL_MOBILE).type("fake@email");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.ENTER_VALID_NUMBER_OR_EMAIL))
            .to.exist;
    });
    it('email address with one digit', function() {
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.EMAIL_MOBILE).type("a");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.ENTER_VALID_NUMBER_OR_EMAIL))
            .to.exist;
    });
    it('email address with many digit', function() {
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.EMAIL_MOBILE).type("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.ENTER_VALID_NUMBER_OR_EMAIL))
            .to.exist;
    });
    it('email address with no local-part', function() {
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.EMAIL_MOBILE).type("@gmail.com");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.ENTER_VALID_NUMBER_OR_EMAIL))
            .to.exist;
    });
    it('email address with no domain', function() {
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.EMAIL_MOBILE).type("thanhdat.vnu");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.ENTER_VALID_NUMBER_OR_EMAIL))
            .to.exist;
    });
    it('email address with no @digit', function() {
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.EMAIL_MOBILE).type("thanhdat.vnugmail.com");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.ENTER_VALID_NUMBER_OR_EMAIL))
            .to.exist;
    });
    it('email address with wrong digit', function() {
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.EMAIL_MOBILE).type("đầucắtmoi@gmail.com");
        cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type("đầucắtmoi@gmail.com");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.ENTER_VALID_NUMBER_OR_EMAIL))
            .to.exist;
    });
    it('common email address', function() {
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.EMAIL_MOBILE).type("123456789@gmail.com");
        cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type("123456789@gmail.com");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains('Quá nhiều người dùng liệt kê email này là đang chờ.'))
            .to.exist;
    });
    
})

describe('Invalid phone number', () => {
    beforeEach(function() {
        cy.visit("https://www.facebook.com/r.php?next=https%3A%2F%2Fwww.facebook.com%2F&locale=vi_VN&display=page");
    });
    
    it('one digit', function() {
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.EMAIL_MOBILE).type("1");
        // cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type("0943883283");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.ENTER_VALID_NUMBER_OR_EMAIL)).to.exist;
    });

    it('two digit', function() {
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.EMAIL_MOBILE).type("11");
        // cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type("0943883283");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.ENTER_VALID_NUMBER_OR_EMAIL)).to.exist;
    });

    it('3 digit', function() {
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.EMAIL_MOBILE).type("333");
        cy.get(account_create_elements.FIRST_NAME).type("First");
        // cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type("0943883283");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.ENTER_VALID_NUMBER_OR_EMAIL)).to.exist;
    });

    it('4 digit', function() {
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.EMAIL_MOBILE).type("4444");
        // cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type("0943883283");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.ENTER_VALID_NUMBER_OR_EMAIL)).to.exist;
    });

    it('5 digit', function() {
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.EMAIL_MOBILE).type("55555");
        // cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type("0943883283");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.ENTER_VALID_NUMBER_OR_EMAIL)).to.exist;
    });

    it('6 digit', function() {
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.EMAIL_MOBILE).type("666666");
        // cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type("0943883283");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.ENTER_VALID_NUMBER_OR_EMAIL)).to.exist;
    });

    it('7 digit', function() {
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.EMAIL_MOBILE).type("7777777");
        // cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type("0943883283");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.ENTER_VALID_NUMBER_OR_EMAIL)).to.exist;
    });

    it('8 digit', function() {
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.EMAIL_MOBILE).type("88888888");
        // cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type("0943883283");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.ENTER_VALID_NUMBER_OR_EMAIL)).to.exist;
    });

    it('wrong format number', function() {
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.EMAIL_MOBILE).type("123456789");
        // cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type("0943883283");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.ENTER_VALID_NUMBER_OR_EMAIL)).to.exist;
    });

    it('not exected digit on phone number', function() {
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.EMAIL_MOBILE).type("+-1234*1234");
        // cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type("0943883283");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.ENTER_VALID_NUMBER_OR_EMAIL)).to.exist;
    });

    it('not exected digit on phone number', function() {
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.EMAIL_MOBILE).type("+-_+#%*1234");
        // cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type("0943883283");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.ENTER_VALID_NUMBER_OR_EMAIL)).to.exist;
    });

    it('no phone number', function() {
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.EMAIL_MOBILE).type("{enter}");
        // cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type("0943883283");
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.NO_PHONE_NUMBER)).to.exist;
    });

})

describe('Wrong name', () => {
    beforeEach(function() {
        cy.visit("https://www.facebook.com/r.php?next=https%3A%2F%2Fwww.facebook.com%2F&locale=vi_VN&display=page");
    });

    it('No first name digit', function() {
        cy.get(account_create_elements.LAST_NAME).type("Last");
        cy.get(account_create_elements.EMAIL_MOBILE).type(random);
        cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type(random);
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.WHATS_YOUR_NAME)).to.exist;
    });

    it('No last name digit', function() {
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.EMAIL_MOBILE).type(random);
        cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type(random);
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.WHATS_YOUR_NAME)).to.exist;
    });

    it('Very long last name digit', function() {
        cy.get(account_create_elements.FIRST_NAME).type("First");
        cy.get(account_create_elements.LAST_NAME).type("Công tằng Tôn Nữ Lã Thị Ngọc Như Quỳnh Sống Ở Nam Định");
        cy.get(account_create_elements.EMAIL_MOBILE).type(random);
        cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type(random);
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.LONG_NAME)).to.exist;
    });

    it('Very long fisrt name digit', function() {
        cy.get(account_create_elements.FIRST_NAME).type("Công tằng Tôn Nữ Lã Thị Ngọc Như");
        cy.get(account_create_elements.LAST_NAME).type("Name");
        cy.get(account_create_elements.EMAIL_MOBILE).type(random);
        cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type(random);
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.LONG_NAME)).to.exist;
    });

    it('Short first name with one digit', function() {
        cy.get(account_create_elements.FIRST_NAME).type("a");
        cy.get(account_create_elements.LAST_NAME).type("Name");
        cy.get(account_create_elements.EMAIL_MOBILE).type(random);
        cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type(random);
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.SHORT_NAME)).to.exist;
    });

    it('Short last name with one digit', function() {
        cy.get(account_create_elements.FIRST_NAME).type("Thành");
        cy.get(account_create_elements.LAST_NAME).type("b");
        cy.get(account_create_elements.EMAIL_MOBILE).type(random);
        cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type(random);
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.SHORT_NAME)).to.exist;
    });

    it('last name with number', function() {
        cy.get(account_create_elements.FIRST_NAME).type("Thành");
        cy.get(account_create_elements.LAST_NAME).type("78");
        cy.get(account_create_elements.EMAIL_MOBILE).type(random);
        cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type(random);
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.NOT_EXPECTED_DIGIT)).to.exist;
    });

    it('first name with number', function() {
        cy.get(account_create_elements.FIRST_NAME).type("12");
        cy.get(account_create_elements.LAST_NAME).type("Đạt");
        cy.get(account_create_elements.EMAIL_MOBILE).type(random);
        cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type(random);
        cy.get(account_create_elements.PASSWORD).type("Bad_Password123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nữ').click();
        cy.get(account_create_elements.SUBMIT).click();
        expect(cy.contains(account_create_messages.NOT_EXPECTED_DIGIT)).to.exist;
    });
})

describe('Invalid Password', () => {
    beforeEach(function() {
        cy.visit("https://www.facebook.com/r.php?next=https%3A%2F%2Fwww.facebook.com%2F&locale=vi_VN&display=page");
    });

    it('password with 1 digit', function() {
        cy.get(account_create_elements.FIRST_NAME).type("Thành");
        cy.get(account_create_elements.LAST_NAME).type("Đạt");
        cy.get(account_create_elements.EMAIL_MOBILE).type(random);
        cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type(random);
        cy.get(account_create_elements.PASSWORD).type("1");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nam').click();
        cy.get(account_create_elements.SUBMIT).click();
        cy.wait(3000);
        expect(cy.contains(account_create_messages.SHORT_PASSWORD)).to.exist;
    });
    it('password with 2 digit', function() {
        cy.get(account_create_elements.FIRST_NAME).type("Thành");
        cy.get(account_create_elements.LAST_NAME).type("Đạt");
        cy.get(account_create_elements.EMAIL_MOBILE).type(random);
        cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type(random);
        cy.get(account_create_elements.PASSWORD).type("12");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nam').click();
        cy.get(account_create_elements.SUBMIT).click();
        cy.wait(3000);
        expect(cy.contains(account_create_messages.SHORT_PASSWORD)).to.exist;
    });
    it('password with 3 digit', function() {
        cy.get(account_create_elements.FIRST_NAME).type("Thành");
        cy.get(account_create_elements.LAST_NAME).type("Đạt");
        cy.get(account_create_elements.EMAIL_MOBILE).type(random);
        cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type(random);
        cy.get(account_create_elements.PASSWORD).type("123");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nam').click();
        cy.get(account_create_elements.SUBMIT).click();
        cy.wait(3000);
        expect(cy.contains(account_create_messages.SHORT_PASSWORD)).to.exist;
    });
    it('password with 4 digit', function() {
        cy.get(account_create_elements.FIRST_NAME).type("Thành");
        cy.get(account_create_elements.LAST_NAME).type("Đạt");
        cy.get(account_create_elements.EMAIL_MOBILE).type(random);
        cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type(random);
        cy.get(account_create_elements.PASSWORD).type("1234");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nam').click();
        cy.get(account_create_elements.SUBMIT).click();
        cy.wait(3000);
        expect(cy.contains(account_create_messages.SHORT_PASSWORD)).to.exist;
    });
    it('password with 5 digit', function() {
        cy.get(account_create_elements.FIRST_NAME).type("Thành");
        cy.get(account_create_elements.LAST_NAME).type("Đạt");
        cy.get(account_create_elements.EMAIL_MOBILE).type(random);
        cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type(random);
        cy.get(account_create_elements.PASSWORD).type("12345");
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nam').click();
        cy.get(account_create_elements.SUBMIT).click();
        cy.wait(3000);
        expect(cy.contains(account_create_messages.SHORT_PASSWORD)).to.exist;
    });
    it('password with not allowed digit', function() {
        cy.get(account_create_elements.FIRST_NAME).type("Thành");
        cy.get(account_create_elements.LAST_NAME).type("Đạt");
        cy.get(account_create_elements.EMAIL_MOBILE).type(random);
        cy.get(account_create_elements.EMAIL_MOBILE_CONFIRMATION).type(random);
        cy.get(account_create_elements.PASSWORD).type('Đầu cắt moi');
        cy.get(account_create_elements.DAY).select('9');
        cy.get(account_create_elements.MONTH).select('6');
        cy.get(account_create_elements.YEAR).select('2000');
        cy.contains('Nam').click();
        cy.get(account_create_elements.SUBMIT).click();
        cy.wait(10000);
        expect(cy.contains(account_create_messages.SHORT_PASSWORD)).to.exist;
    });

})
