windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(function (windowRect, visibleFrameOfSourceScreen, visibleFrameOfDestinationScreen) {
    var oneHalfRect = SpectacleCalculationHelpers.copyRect(visibleFrameOfDestinationScreen);
    oneHalfRect.height = Math.floor(oneHalfRect.height / 2.0);
    oneHalfRect.y += oneHalfRect.height + (visibleFrameOfDestinationScreen.height % 2.0);
    if (Math.abs(CGRectGetMidX(windowRect) - CGRectGetMidX(oneHalfRect)) <= 1.0) {
        var twoThirdsRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
        twoThirdsRect.height = Math.floor(visibleFrameOfDestinationScreen.height * 2 / 3.0);
        twoThirdsRect.y = visibleFrameOfDestinationScreen.y + visibleFrameOfDestinationScreen.height - twoThirdsRect.height;
        var oneThirdRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
        oneThirdRect.height = Math.floor(visibleFrameOfDestinationScreen.height / 3.0);
        oneThirdRect.y = visibleFrameOfDestinationScreen.y + visibleFrameOfDestinationScreen.height - oneThirdRect.height;
        var threeQuarterRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
        threeQuarterRect.height = Math.floor(visibleFrameOfDestinationScreen.height * 3 / 4.0);
        threeQuarterRect.y = visibleFrameOfDestinationScreen.y + visibleFrameOfDestinationScreen.height - threeQuarterRect.height;
        var oneQuarterRect = SpectacleCalculationHelpers.copyRect(oneHalfRect);
        oneQuarterRect.height = Math.floor(visibleFrameOfDestinationScreen.height / 4.0);
        oneQuarterRect.y = visibleFrameOfDestinationScreen.y + visibleFrameOfDestinationScreen.height - oneQuarterRect.height;

        if (SpectacleCalculationHelpers.rectCenteredWithinRect(oneHalfRect, windowRect)) {
            return twoThirdsRect;
        }
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(twoThirdsRect, windowRect)) {
            return oneThirdRect;
        }
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(oneThirdRect, windowRect)) {
            return threeQuarterRect;
        }
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(threeQuarterRect, windowRect)) {
            return oneQuarterRect;
        }
        if (SpectacleCalculationHelpers.rectCenteredWithinRect(oneQuarterRect, windowRect)) {
            return oneHalfRect;
        }
    }
    return oneHalfRect;
}, "SpectacleWindowActionTopHalf");
