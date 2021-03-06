
declare module "nativescript-carousel-view" {

    import view = require("ui/core/view");
    import dependencyObservable = require("ui/core/dependency-observable");
    import observableArrayModule = require("data/observable-array");

    export class CarouselView extends view.View {
        // static (prototype) properties
        public static positionProperty: dependencyObservable.Property;
        public static templateSelectorProperty: dependencyObservable.Property;
        public static itemsSourceProperty: dependencyObservable.Property;
        public static interPageSpacingProperty: dependencyObservable.Property;
        public static interPageSpacingColorProperty: dependencyObservable.Property;
        public static orientation: dependencyObservable.Property;
        public static showIndicators: dependencyObservable.Property;
        public static indicatorsShape: dependencyObservable.Property;
        public static indicatorsTintColor: dependencyObservable.Property;
        public static indicatorsCurrentPageColor: dependencyObservable.Property;
        public static animateTransition: dependencyObservable.Property;

        // instance properties
        position: number;
        templateSelector: ITemplateSelector;
        itemsSource: observableArrayModule.ObservableArray<any>;
        interPageSpacing: number;
        interPageSpacingColor: string;
        orientation: string;
        showIndicators: boolean;
        indicatorsShape: string;
        indicatorsTintColor: string;
        indicatorsCurrentPageColor: string;
        animateTransition: boolean;

        public insertPage(position: number, bindingContext: any);
        public removePage(position: number);
        public setCurrentPage(position: number): void;

        android: any; /*android.support.v4.view.ViewPager;*/
        ios: any; /*UIPageViewController;*/
    }

    export interface ITemplateSelector {
        OnSelectTemplate(position: number, bindingContext: any) : view.View;
    }
} 