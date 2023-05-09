interface ClusterIconInfo {
    text: string;
    index: number;
    title?: string;
    html?: string;
}
type MarkerExtended = google.maps.Marker & {
    isAdded?: boolean;
};
type TCalculator = (markers: MarkerExtended[], num: number) => ClusterIconInfo;
interface ClusterIconStyle {
    url?: string;
    svg?: string;
    className?: string;
    height: number;
    width: number;
    anchorText?: number[];
    anchorIcon?: number[];
    textColor?: string;
    textSize?: number;
    textDecoration?: string;
    fontWeight?: string;
    fontStyle?: string;
    fontFamily?: string;
    backgroundPosition?: string;
}
interface ClustererOptions {
    gridSize?: number;
    maxZoom?: number;
    zoomOnClick?: boolean;
    averageCenter?: boolean;
    minimumClusterSize?: number;
    ignoreHidden?: boolean;
    title?: string;
    calculator?: TCalculator;
    clusterClass?: string;
    styles?: ClusterIconStyle[];
    enableRetinaIcons?: boolean;
    batchSize?: number;
    batchSizeIE?: number;
    imagePath?: string;
    imageExtension?: string;
    imageSizes?: number[];
}

declare class ClusterIcon {
    cluster: Cluster;
    className: string;
    clusterClassName: string;
    styles: ClusterIconStyle[];
    center: google.maps.LatLng | undefined;
    div: HTMLDivElement | null;
    sums: ClusterIconInfo | null;
    visible: boolean;
    url: string | undefined;
    svg: string | undefined;
    height: number;
    width: number;
    anchorText: number[];
    anchorIcon: number[];
    textColor: string;
    textSize: number;
    textDecoration: string;
    fontWeight: string;
    fontStyle: string;
    fontFamily: string;
    backgroundPosition: string;
    cMouseDownInCluster: boolean | null;
    cDraggingMapByCluster: boolean | null;
    timeOut: number | null;
    boundsChangedListener: google.maps.MapsEventListener | null;
    constructor(cluster: Cluster, styles: ClusterIconStyle[]);
    onBoundsChanged(): void;
    onMouseDown(): void;
    onClick(event: Event): void;
    onMouseOver(): void;
    onMouseOut(): void;
    onAdd(): void;
    onRemove(): void;
    draw(): void;
    hide(): void;
    show(): void;
    useStyle(sums: ClusterIconInfo): void;
    setCenter(center: google.maps.LatLng): void;
    getPosFromLatLng(latlng: google.maps.LatLng): google.maps.Point | null;
}

declare class Cluster {
    markerClusterer: Clusterer;
    map: google.maps.Map | google.maps.StreetViewPanorama | null;
    gridSize: number;
    minClusterSize: number;
    averageCenter: boolean;
    markers: MarkerExtended[];
    center: google.maps.LatLng | undefined;
    bounds: google.maps.LatLngBounds | null;
    clusterIcon: ClusterIcon;
    constructor(markerClusterer: Clusterer);
    getSize(): number;
    getMarkers(): MarkerExtended[];
    getCenter(): google.maps.LatLng | undefined;
    getMap(): google.maps.Map | google.maps.StreetViewPanorama | null;
    getClusterer(): Clusterer;
    getBounds(): google.maps.LatLngBounds;
    remove(): void;
    addMarker(marker: MarkerExtended): boolean;
    isMarkerInClusterBounds(marker: MarkerExtended): boolean;
    calculateBounds(): void;
    updateIcon(): void;
    isMarkerAlreadyAdded(marker: MarkerExtended): boolean;
}

declare class Clusterer {
    markers: MarkerExtended[];
    clusters: Cluster[];
    listeners: google.maps.MapsEventListener[];
    activeMap: google.maps.Map | google.maps.StreetViewPanorama | null;
    ready: boolean;
    gridSize: number;
    minClusterSize: number;
    maxZoom: number | null;
    styles: ClusterIconStyle[];
    title: string;
    zoomOnClick: boolean;
    averageCenter: boolean;
    ignoreHidden: boolean;
    enableRetinaIcons: boolean;
    imagePath: string;
    imageExtension: string;
    imageSizes: number[];
    calculator: TCalculator;
    batchSize: number;
    batchSizeIE: number;
    clusterClass: string;
    timerRefStatic: number | null;
    constructor(map: google.maps.Map, optMarkers?: MarkerExtended[], optOptions?: ClustererOptions);
    onZoomChanged(): void;
    onIdle(): void;
    onAdd(): void;
    onRemove(): void;
    draw(): void;
    setupStyles(): void;
    fitMapToMarkers(): void;
    getGridSize(): number;
    setGridSize(gridSize: number): void;
    getMinimumClusterSize(): number;
    setMinimumClusterSize(minimumClusterSize: number): void;
    getMaxZoom(): number | null;
    setMaxZoom(maxZoom: number): void;
    getStyles(): ClusterIconStyle[];
    setStyles(styles: ClusterIconStyle[]): void;
    getTitle(): string;
    setTitle(title: string): void;
    getZoomOnClick(): boolean;
    setZoomOnClick(zoomOnClick: boolean): void;
    getAverageCenter(): boolean;
    setAverageCenter(averageCenter: boolean): void;
    getIgnoreHidden(): boolean;
    setIgnoreHidden(ignoreHidden: boolean): void;
    getEnableRetinaIcons(): boolean;
    setEnableRetinaIcons(enableRetinaIcons: boolean): void;
    getImageExtension(): string;
    setImageExtension(imageExtension: string): void;
    getImagePath(): string;
    setImagePath(imagePath: string): void;
    getImageSizes(): number[];
    setImageSizes(imageSizes: number[]): void;
    getCalculator(): TCalculator;
    setCalculator(calculator: TCalculator): void;
    getBatchSizeIE(): number;
    setBatchSizeIE(batchSizeIE: number): void;
    getClusterClass(): string;
    setClusterClass(clusterClass: string): void;
    getMarkers(): MarkerExtended[];
    getTotalMarkers(): number;
    getClusters(): Cluster[];
    getTotalClusters(): number;
    addMarker(marker: MarkerExtended, optNoDraw: boolean): void;
    addMarkers(markers: MarkerExtended[], optNoDraw: boolean): void;
    pushMarkerTo(marker: MarkerExtended): void;
    removeMarker_(marker: MarkerExtended): boolean;
    removeMarker(marker: MarkerExtended, optNoDraw: boolean): boolean;
    removeMarkers(markers: MarkerExtended[], optNoDraw: boolean): boolean;
    clearMarkers(): void;
    repaint(): void;
    getExtendedBounds(bounds: google.maps.LatLngBounds): google.maps.LatLngBounds;
    redraw(): void;
    resetViewport(optHide: boolean): void;
    distanceBetweenPoints(p1: google.maps.LatLng, p2: google.maps.LatLng): number;
    isMarkerInBounds(marker: MarkerExtended, bounds: google.maps.LatLngBounds): boolean;
    addToClosestCluster(marker: MarkerExtended): void;
    createClusters(iFirst: number): void;
    extend<A extends typeof ClusterIcon | typeof Clusterer>(obj1: A, obj2: typeof google.maps.OverlayView): A;
}

export { Cluster, ClusterIcon, ClusterIconInfo, ClusterIconStyle, Clusterer, ClustererOptions, MarkerExtended, TCalculator };