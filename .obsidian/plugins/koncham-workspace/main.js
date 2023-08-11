/*
THIS IS A GENERATED/BUNDLED FILE BY ROLLUP
if you want to view the source visit the plugins github repository
*/

'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const plugin_name = 'koncham-workspace';
const view_type = 'center-panes';
const view_name = 'Center Panes';
class KonchamWorkspace extends obsidian.Plugin {
    constructor() {
        super(...arguments);
        this.initializeRootLeavesView = () => {
            if (this.app.workspace.getLeavesOfType(view_type).length) {
                return;
            }
            this.app.workspace.getLeftLeaf(false).setViewState({
                type: view_type,
            });
        };
    }
    onunload() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('unloading plugin: ' + plugin_name);
        });
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('loading plugin: ' + plugin_name);
            this.registerView(view_type, (leaf) => (new RootLeavesListView(leaf, this)));
            this.app.workspace.onLayoutReady(this.initializeRootLeavesView);
            this.addCommand({
                id: 'leaves-pin-on',
                name: 'Pin all panes',
                callback: () => this.leavesPinOn(),
            });
            this.addCommand({
                id: 'leaves-pin-off',
                name: 'Unpin all panes',
                callback: () => this.leavesPinOff(),
            });
            this.addCommand({
                id: 'show-center-panes-view',
                name: 'Show center-panes',
                callback: () => this.showRootLeavesView(),
            });
            this.addCommand({
                id: 'open-center-panes-view',
                name: 'Reopen center-panes',
                callback: () => this.initializeRootLeavesView(),
            });
        });
    }
    leavesPinOn() {
        this.app.workspace.iterateRootLeaves((leaf) => {
            leaf.setPinned(true);
        });
    }
    leavesPinOff() {
        this.app.workspace.iterateRootLeaves((leaf) => {
            leaf.setPinned(false);
        });
    }
    showRootLeavesView() {
        this.app.workspace.iterateAllLeaves((leaf) => {
            if (leaf.view.getViewType() == view_type) {
                this.app.workspace.revealLeaf(leaf);
            }
        });
    }
}
class RootLeavesListView extends obsidian.ItemView {
    constructor(leaf, plugin) {
        super(leaf);
        this.refreshView = () => {
            let leaf_active = this.app.workspace.activeLeaf;
            const rootEl = createDiv({ cls: 'nav-folder mod-root koncham-workspace koncham-workspace-root-panes' });
            this.contentEl.empty();
            this.contentEl.appendChild(rootEl);
            const childrenEl = rootEl.createDiv({ cls: 'nav-folder-children' });
            this.app.workspace.iterateRootLeaves((leaf) => {
                const navFile = childrenEl.createDiv({ cls: 'nav-file' });
                const navFileTitle = navFile.createDiv({ cls: 'nav-file-title' });
                if (leaf === leaf_active) {
                    navFileTitle.addClass('is-active');
                }
                let displaytext;
                if (leaf.view.getViewType() == "empty") {
                    displaytext = "[empty]";
                }
                else {
                    displaytext = leaf.getDisplayText();
                }
                navFileTitle.createDiv({
                    cls: 'nav-file-title-content',
                    text: displaytext,
                });
                navFileTitle.onClickEvent(() => {
                    this.app.workspace.setActiveLeaf(leaf);
                });
            });
        };
        this.plugin = plugin;
        this.refreshView();
    }
    onload() {
        this.registerEvent(this.app.workspace.on('active-leaf-change', this.refreshView));
        this.registerEvent(this.app.workspace.on('layout-change', this.refreshView));
        this.registerEvent(this.app.workspace.on('layout-ready', this.refreshView));
    }
    getViewType() {
        return view_type;
    }
    getDisplayText() {
        return view_name;
    }
    getIcon() {
        return 'three-horizontal-bars';
    }
    onHeaderMenu(menu) {
        menu
            .addItem((item) => {
            item
                .setTitle('close')
                .setIcon('cross')
                .onClick(() => {
                this.app.workspace.detachLeavesOfType(view_type);
            });
        })
            .addItem((item) => {
            item
                .setTitle('pin leaves')
                .setIcon('pin')
                .onClick(() => {
                this.plugin.leavesPinOn();
            });
        })
            .addItem((item) => {
            item
                .setTitle('unpin leaves')
                .setIcon('cross-in-box')
                .onClick(() => {
                this.plugin.leavesPinOff();
            });
        });
    }
}

module.exports = KonchamWorkspace;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm1haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20pIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGZyb20ubGVuZ3RoLCBqID0gdG8ubGVuZ3RoOyBpIDwgaWw7IGkrKywgaisrKVxyXG4gICAgICAgIHRvW2pdID0gZnJvbVtpXTtcclxuICAgIHJldHVybiB0bztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiaW1wb3J0IHtQbHVnaW4sIEl0ZW1WaWV3LCBXb3Jrc3BhY2VMZWFmLCBNZW51fSBmcm9tICdvYnNpZGlhbic7XHJcblxyXG5jb25zdCBwbHVnaW5fbmFtZSA9ICdrb25jaGFtLXdvcmtzcGFjZSdcclxuY29uc3Qgdmlld190eXBlID0gJ2NlbnRlci1wYW5lcydcclxuY29uc3Qgdmlld19uYW1lID0gJ0NlbnRlciBQYW5lcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtvbmNoYW1Xb3Jrc3BhY2UgZXh0ZW5kcyBQbHVnaW4ge1xyXG5cclxuXHRhc3luYyBvbnVubG9hZCgpIHtcclxuXHRcdGNvbnNvbGUubG9nKCd1bmxvYWRpbmcgcGx1Z2luOiAnICsgcGx1Z2luX25hbWUpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgb25sb2FkKCkge1xyXG5cdFx0Y29uc29sZS5sb2coJ2xvYWRpbmcgcGx1Z2luOiAnICsgcGx1Z2luX25hbWUpO1xyXG5cclxuXHRcdHRoaXMucmVnaXN0ZXJWaWV3KHZpZXdfdHlwZSwgKGxlYWYpID0+IChuZXcgUm9vdExlYXZlc0xpc3RWaWV3KGxlYWYsIHRoaXMpKSk7XHJcblx0XHRcclxuXHRcdHRoaXMuYXBwLndvcmtzcGFjZS5vbkxheW91dFJlYWR5KHRoaXMuaW5pdGlhbGl6ZVJvb3RMZWF2ZXNWaWV3KTtcclxuXHJcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xyXG5cdFx0XHRpZDogJ2xlYXZlcy1waW4tb24nLFxyXG5cdFx0XHRuYW1lOiAnUGluIGFsbCBwYW5lcycsXHJcblx0XHRcdGNhbGxiYWNrOiAoKSA9PiB0aGlzLmxlYXZlc1Bpbk9uKCksXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xyXG5cdFx0XHRpZDogJ2xlYXZlcy1waW4tb2ZmJyxcclxuXHRcdFx0bmFtZTogJ1VucGluIGFsbCBwYW5lcycsXHJcblx0XHRcdGNhbGxiYWNrOiAoKSA9PiB0aGlzLmxlYXZlc1Bpbk9mZigpLFxyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcclxuXHRcdFx0aWQ6ICdzaG93LWNlbnRlci1wYW5lcy12aWV3JyxcclxuXHRcdFx0bmFtZTogJ1Nob3cgY2VudGVyLXBhbmVzJyxcclxuXHRcdFx0Y2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvd1Jvb3RMZWF2ZXNWaWV3KCksXHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmFkZENvbW1hbmQoe1xyXG5cdFx0XHRpZDogJ29wZW4tY2VudGVyLXBhbmVzLXZpZXcnLFxyXG5cdFx0XHRuYW1lOiAnUmVvcGVuIGNlbnRlci1wYW5lcycsXHJcblx0XHRcdGNhbGxiYWNrOiAoKSA9PiB0aGlzLmluaXRpYWxpemVSb290TGVhdmVzVmlldygpLFxyXG5cdFx0fSk7XHJcblxyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSByZWFkb25seSBpbml0aWFsaXplUm9vdExlYXZlc1ZpZXcgPSAoKTogdm9pZCA9PiB7XHJcblx0XHRpZiAodGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZSh2aWV3X3R5cGUpLmxlbmd0aCkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVmdExlYWYoZmFsc2UpLnNldFZpZXdTdGF0ZSh7XHJcblx0XHRcdHR5cGU6IHZpZXdfdHlwZSxcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGxlYXZlc1Bpbk9uKCl7XHJcblx0XHR0aGlzLmFwcC53b3Jrc3BhY2UuaXRlcmF0ZVJvb3RMZWF2ZXMoKGxlYWY6IFdvcmtzcGFjZUxlYWYpID0+IHtcclxuXHRcdFx0bGVhZi5zZXRQaW5uZWQodHJ1ZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGxlYXZlc1Bpbk9mZigpIHtcclxuXHRcdHRoaXMuYXBwLndvcmtzcGFjZS5pdGVyYXRlUm9vdExlYXZlcygobGVhZjogV29ya3NwYWNlTGVhZikgPT4ge1xyXG5cdFx0XHRsZWFmLnNldFBpbm5lZChmYWxzZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHNob3dSb290TGVhdmVzVmlldygpIHtcclxuXHRcdHRoaXMuYXBwLndvcmtzcGFjZS5pdGVyYXRlQWxsTGVhdmVzKChsZWFmOiBXb3Jrc3BhY2VMZWFmKSA9PiB7XHJcblx0XHRcdGlmIChsZWFmLnZpZXcuZ2V0Vmlld1R5cGUoKSA9PSB2aWV3X3R5cGUpIHtcclxuXHRcdFx0XHR0aGlzLmFwcC53b3Jrc3BhY2UucmV2ZWFsTGVhZihsZWFmKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxufVxyXG5cclxuY2xhc3MgUm9vdExlYXZlc0xpc3RWaWV3IGV4dGVuZHMgSXRlbVZpZXcge1xyXG5cdHByaXZhdGUgcmVhZG9ubHkgcGx1Z2luOiBLb25jaGFtV29ya3NwYWNlXHJcblxyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0bGVhZjogV29ya3NwYWNlTGVhZixcclxuXHRcdHBsdWdpbjogS29uY2hhbVdvcmtzcGFjZSxcclxuXHQpIHtcclxuXHRcdHN1cGVyKGxlYWYpO1xyXG5cclxuXHRcdHRoaXMucGx1Z2luID0gcGx1Z2luO1xyXG5cdFx0dGhpcy5yZWZyZXNoVmlldygpO1xyXG5cdH1cclxuXHJcblx0b25sb2FkKCl7XHJcblx0XHR0aGlzLnJlZ2lzdGVyRXZlbnQodGhpcy5hcHAud29ya3NwYWNlLm9uKCdhY3RpdmUtbGVhZi1jaGFuZ2UnLCB0aGlzLnJlZnJlc2hWaWV3KSk7XHJcblx0XHR0aGlzLnJlZ2lzdGVyRXZlbnQodGhpcy5hcHAud29ya3NwYWNlLm9uKCdsYXlvdXQtY2hhbmdlJywgdGhpcy5yZWZyZXNoVmlldykpO1xyXG5cdFx0dGhpcy5yZWdpc3RlckV2ZW50KHRoaXMuYXBwLndvcmtzcGFjZS5vbignbGF5b3V0LXJlYWR5JywgdGhpcy5yZWZyZXNoVmlldykpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlYWRvbmx5IHJlZnJlc2hWaWV3ID0gKCk6IHZvaWQgPT4ge1xyXG5cdFx0bGV0IGxlYWZfYWN0aXZlID0gdGhpcy5hcHAud29ya3NwYWNlLmFjdGl2ZUxlYWY7XHJcblx0XHRjb25zdCByb290RWwgPSBjcmVhdGVEaXYoeyBjbHM6ICduYXYtZm9sZGVyIG1vZC1yb290IGtvbmNoYW0td29ya3NwYWNlIGtvbmNoYW0td29ya3NwYWNlLXJvb3QtcGFuZXMnIH0pO1xyXG5cdFx0dGhpcy5jb250ZW50RWwuZW1wdHkoKTtcclxuXHRcdHRoaXMuY29udGVudEVsLmFwcGVuZENoaWxkKHJvb3RFbCk7XHJcblx0XHRjb25zdCBjaGlsZHJlbkVsID0gcm9vdEVsLmNyZWF0ZURpdih7IGNsczogJ25hdi1mb2xkZXItY2hpbGRyZW4nIH0pO1xyXG5cdFx0dGhpcy5hcHAud29ya3NwYWNlLml0ZXJhdGVSb290TGVhdmVzKChsZWFmOiBXb3Jrc3BhY2VMZWFmKSA9PiB7XHJcblx0XHRcdGNvbnN0IG5hdkZpbGUgPSBjaGlsZHJlbkVsLmNyZWF0ZURpdih7IGNsczogJ25hdi1maWxlJyB9KTtcclxuXHRcdFx0Y29uc3QgbmF2RmlsZVRpdGxlID0gbmF2RmlsZS5jcmVhdGVEaXYoeyBjbHM6ICduYXYtZmlsZS10aXRsZScgfSk7XHJcblxyXG5cdFx0XHRpZiAobGVhZiA9PT0gbGVhZl9hY3RpdmUpIHtcclxuXHRcdFx0XHRuYXZGaWxlVGl0bGUuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRsZXQgZGlzcGxheXRleHRcclxuXHRcdFx0aWYgKGxlYWYudmlldy5nZXRWaWV3VHlwZSgpID09IFwiZW1wdHlcIil7XHJcblx0XHRcdFx0ZGlzcGxheXRleHQgPSBcIltlbXB0eV1cIlxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRpc3BsYXl0ZXh0ID0gbGVhZi5nZXREaXNwbGF5VGV4dCgpXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdG5hdkZpbGVUaXRsZS5jcmVhdGVEaXYoe1xyXG5cdFx0XHRcdGNsczogJ25hdi1maWxlLXRpdGxlLWNvbnRlbnQnLFxyXG5cdFx0XHRcdHRleHQ6IGRpc3BsYXl0ZXh0LFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdG5hdkZpbGVUaXRsZS5vbkNsaWNrRXZlbnQoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuYXBwLndvcmtzcGFjZS5zZXRBY3RpdmVMZWFmKGxlYWYpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldFZpZXdUeXBlKCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdmlld190eXBlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldERpc3BsYXlUZXh0KCk6IHN0cmluZyB7XHJcblx0XHRyZXR1cm4gdmlld19uYW1lO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldEljb24oKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiAndGhyZWUtaG9yaXpvbnRhbC1iYXJzJztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBvbkhlYWRlck1lbnUobWVudTogTWVudSk6IHZvaWQge1xyXG5cdFx0bWVudVxyXG5cdFx0XHQuYWRkSXRlbSgoaXRlbSkgPT4ge1xyXG5cdFx0XHRcdGl0ZW1cclxuXHRcdFx0XHRcdC5zZXRUaXRsZSgnY2xvc2UnKVxyXG5cdFx0XHRcdFx0LnNldEljb24oJ2Nyb3NzJylcclxuXHRcdFx0XHRcdC5vbkNsaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5hcHAud29ya3NwYWNlLmRldGFjaExlYXZlc09mVHlwZSh2aWV3X3R5cGUpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5hZGRJdGVtKChpdGVtKSA9PiB7XHJcblx0XHRcdFx0aXRlbVxyXG5cdFx0XHRcdFx0LnNldFRpdGxlKCdwaW4gbGVhdmVzJylcclxuXHRcdFx0XHRcdC5zZXRJY29uKCdwaW4nKVxyXG5cdFx0XHRcdFx0Lm9uQ2xpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnBsdWdpbi5sZWF2ZXNQaW5PbigpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5hZGRJdGVtKChpdGVtKSA9PiB7XHJcblx0XHRcdFx0aXRlbVxyXG5cdFx0XHRcdFx0LnNldFRpdGxlKCd1bnBpbiBsZWF2ZXMnKVxyXG5cdFx0XHRcdFx0LnNldEljb24oJ2Nyb3NzLWluLWJveCcpXHJcblx0XHRcdFx0XHQub25DbGljaygoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMucGx1Z2luLmxlYXZlc1Bpbk9mZigpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH0pXHJcblx0fVxyXG59Il0sIm5hbWVzIjpbIlBsdWdpbiIsIkl0ZW1WaWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdURBO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJ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