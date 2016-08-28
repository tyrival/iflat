CREATE TABLE XrBenefit
(
    id CHAR(36),
    month DATETIME,
    dept VARCHAR(100),
    teamCode VARCHAR(20),
    team VARCHAR(200),
    workday DECIMAL(18, 2),
    manhour DECIMAL(18, 2),
    personNum DECIMAL(18, 2),
    workPersonTime DECIMAL(18, 2),
    waitPersonTime DECIMAL(18, 2),
    casualInPersonTime DECIMAL(18, 2),
    casualOutPersonTime DECIMAL(18, 2),
    salaryPersonNum DECIMAL(18, 2),
    averagePersonNum DECIMAL(18, 2),
    quarterProjectBonus DECIMAL(18, 2),
    waitSubsidy DECIMAL(18, 2),
    springFestivalSubsidy DECIMAL(18, 2),
    springFestivalStable DECIMAL(18, 2),
    dinnerSubsidy DECIMAL(18, 2),
    temperatureSubsidy DECIMAL(18, 2),
    rent DECIMAL(18, 2),
    dinnerSelf DECIMAL(18, 2),
    insurance DECIMAL(18, 2),
    material DECIMAL(18, 2),
    comment VARCHAR(2000),
)