import React from "react";
import type { CameraPermissionScreen } from "../../configuration/common/CameraPermission";
interface Props {
    visible: boolean;
    onCloseClick: () => void;
    config: CameraPermissionScreen;
}
export declare function CameraPermissionDenied(props: Props): React.JSX.Element;
export {};
