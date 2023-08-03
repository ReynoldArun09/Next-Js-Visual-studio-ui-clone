import {
    MenubarContent,
    MenubarItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar";

export default function File() {
  return (
    <>
    <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Text File <MenubarShortcut>Ctrl+N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New File <MenubarShortcut>Ctrl+Alt+Win+N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window <MenubarShortcut>Ctrl+Shift+N</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Open File <MenubarShortcut>Ctrl+0</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Open Folder <MenubarShortcut>Ctrl+K Ctrl+0</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Open Workspace from file...
            </MenubarItem>
            <MenubarSub>
              <MenubarSubTrigger>Open Recent</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Reopen closed editor</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>More</MenubarItem>
                <MenubarItem>Clear Recently opened</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem>Add Folder to Workspace</MenubarItem>
            <MenubarItem>Save Workspace As...</MenubarItem>
            <MenubarItem>Duplicate Workspace</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Save <MenubarShortcut>Ctrl+S</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Save As... <MenubarShortcut>Ctrl+Shift+S</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Save All <MenubarShortcut>Ctrl+K S</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Export profile(default)...</MenubarItem>
                <MenubarItem>Import Profile</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>Auto Save</MenubarItem>
            <MenubarSub>
              <MenubarSubTrigger>Preferences</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarSub>
                  <MenubarSubTrigger>Profiles(Default)</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Default</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Show Contents</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Create Profile...</MenubarItem>
                    <MenubarItem>Delete Profile...</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Export Profile...</MenubarItem>
                    <MenubarItem>Import Profile...</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarItem>Turn on Setting Sync...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Settings <MenubarShortcut>Ctrl+K S</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Extensions <MenubarShortcut>Ctrl+Shift+X</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Keyboard shortcuts{" "}
                  <MenubarShortcut>Ctrl+Shift+X</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Configure user Snippets{" "}
                  <MenubarShortcut>Ctrl+Shift+X</MenubarShortcut>
                </MenubarItem>
                <MenubarSub>
                  <MenubarSubTrigger>Theme</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Color Theme</MenubarItem>
                    <MenubarItem>File Icon Theme</MenubarItem>
                    <MenubarItem>Product Item Theme</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarItem>
                  Online Service Settings{" "}
                  <MenubarShortcut>Ctrl+F4</MenubarShortcut>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>Revert File</MenubarItem>
            <MenubarItem>
              Close Editor <MenubarShortcut>Ctrl+F4</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Close Folder <MenubarShortcut>Ctrl+K F</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Close Window <MenubarShortcut>Alt+F4</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Exist</MenubarItem>
          </MenubarContent>
    </>
  )
}
