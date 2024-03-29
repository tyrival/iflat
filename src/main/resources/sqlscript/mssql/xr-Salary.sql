CREATE TABLE XrSalary
(
    id CHAR(36),
    month DATETIME,
    teamCode VARCHAR(20),
    team VARCHAR(200),
    idCardNo VARCHAR(20),
    name VARCHAR(100),
    bank VARCHAR(100),
    account VARCHAR(100),
    workday DECIMAL(18, 2),
    workHour DECIMAL(18, 2),
    waitHour DECIMAL(18, 2),
    overtimeHour DECIMAL(18, 2),
    hourPrice DECIMAL(18, 2),
    dayPrice DECIMAL(18, 2),
    hourOfDay DECIMAL(18, 2),
    waitSubsidy DECIMAL(18, 2),
    monthPrice DECIMAL(18, 2),
    prepay DECIMAL(18, 2),
    deductionOfCheck DECIMAL(18, 2),
    overtimeAmount DECIMAL(18, 2),
    otherSubsidy DECIMAL(18, 2),
    springFestivalSubsidy DECIMAL(18, 2),
    bonusAmount DECIMAL(18, 2),
    payableAmount DECIMAL(18, 2),
    retentionAmount DECIMAL(18, 2),
    supplementaryAmount DECIMAL(18, 2),
    dinnerAmount DECIMAL(18, 2),
    loanAmount DECIMAL(18, 2),
    fineAmount DECIMAL(18, 2),
    otherDeductAmount DECIMAL(18, 2),
    otherFee DECIMAL(18, 2),
    actualAmount DECIMAL(18, 2),
    comment VARCHAR(2000),
)