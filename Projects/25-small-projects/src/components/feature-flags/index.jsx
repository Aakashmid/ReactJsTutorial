import { useContext } from "react";
import ChangeTheme from "../change-theme";
import TabContents from "../Multiple-tabs/TabContents";
import SearchAutocomplete from "../search-autocomplete";
import TicTacToe from "../tic-tac-toe";
import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./FeatureFlagsContext";

export default function FeatureFlags() {
    const componentsToRender = {
        showLightAndDarkMode: <ChangeTheme />,
        showTicTacToe: <TicTacToe />,
        showSearchAutocomplete: <SearchAutocomplete />,
        showMultipleTabs: <TabContents />,
        showTreeView: <TreeView />,
    }

    const { enabledFlags, loading } = useContext(FeatureFlagsContext);

    if (loading)
        return <div>Loading...</div>
    return (
        <div>
            <h1 className="w-full text-center text-2xl font-bold">Feature Flags</h1>
            <div className="py-10">
                {Object.keys(componentsToRender).map((key) =>
                    enabledFlags[key] ? (
                        <div key={key} className="py-5">
                            {componentsToRender[key]}
                        </div>
                    ) : null
                )}
            </div>
        </div>
    )
}