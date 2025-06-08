windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(function (windowRect, visibleFrameOfSourceScreen, visibleFrameOfDestinationScreen) {
    var oneQuarterRect = SpectacleCalculationHelpers.copyRect(visibleFrameOfDestinationScreen);
    oneQuarterRect.width = Math.floor(visibleFrameOfDestinationScreen.width / 2.0);
    oneQuarterRect.height = Math.floor(visibleFrameOfDestinationScreen.height / 2.0);
    oneQuarterRect.y = visibleFrameOfDestinationScreen.y + Math.floor(visibleFrameOfDestinationScreen.height / 2.0) + (visibleFrameOfDestinationScreen.height % 2.0);
    if (Math.abs(CGRectGetMidY(windowRect) - CGRectGetMidY(oneQuarterRect)) <= 1.0 && Math.abs(CGRectGetMidX(windowRect) - CGRectGetMidX(oneQuarterRect)) <= 1.0) {
        var twoThirdRect = SpectacleCalculationHelpers.copyRect(oneQuarterRect);
        twoThirdRect.width = Math.floor(visibleFrameOfDestinationScreen.width * 2 / 3.0);
        twoThirdRect.height = Math.floor(visibleFrameOfDestinationScreen.height * 2 / 3.0);
        twoThirdRect.y = visibleFrameOfDestinationScreen.y + visibleFrameOfDestinationScreen.height - twoThirdRect.height;
        var oneThirdRect = SpectacleCalculationHelpers.copyRect(oneQuarterRect);
        oneThirdRect.width = Math.floor(visibleFrameOfDestinationScreen.width / 3.0);
        oneThirdRect.height = Math.floor(visibleFrameOfDestinationScreen.height / 3.0);
        oneThirdRect.y = visibleFrameOfDestinationScreen.y + visibleFrameOfDestinationScreen.height - oneThirdRect.height;
        var threeQuarterRect = SpectacleCalculationHelpers.copyRect(oneQuarterRect);
        threeQuarterRect.width = Math.floor(visibleFrameOfDestinationScreen.width * 3 / 4.0);
        threeQuarterRect.height = Math.floor(visibleFrameOfDestinationScreen.height * 3 / 4.0);
        threeQuarterRect.y = visibleFrameOfDestinationScreen.y + visibleFrameOfDestinationScreen.height - threeQuarterRect.height;
        var oneQuarterSmallRect = SpectacleCalculationHelpers.copyRect(oneQuarterRect);
        oneQuarterSmallRect.width = Math.floor(visibleFrameOfDestinationScreen.width / 4.0);
        oneQuarterSmallRect.height = Math.floor(visibleFrameOfDestinationScreen.height / 4.0);
        oneQuarterSmallRect.y = visibleFrameOfDestinationScreen.y + visibleFrameOfDestinationScreen.height - oneQuarterSmallRect.height;

        if (SpectacleCalculationHelpers.rectCenteredWithinRect(oneQuarterRect, windowRect)) {
            return twoThirdRect;
        }
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(twoThirdRect, windowRect)) {
            return oneThirdRect;
        }
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(oneThirdRect, windowRect)) {
            return threeQuarterRect;
        }
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(threeQuarterRect, windowRect)) {
            return oneQuarterSmallRect;
        }
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(oneQuarterSmallRect, windowRect)) {
            return oneQuarterRect;
        }
    }
    return oneQuarterRect;
}, "SpectacleWindowActionUpperLeft");
