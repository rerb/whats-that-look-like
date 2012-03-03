// What's That Look Like is a Safari Extension that queries Google
// Images for selected text.
	
// Copyright (C) 2011 Robert Erb

// This file is part of What's That Look Like.

// What's That Look Like is free software: you can redistribute it
// and/or modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation, either version 3 of
// the License, or (at your option) any later version.

// What's That Look Like is distributed in the hope that it will be
// useful, but WITHOUT ANY WARRANTY; without even the implied
// warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
// See the GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with What's That Look Like.  If not, see
// <http://www.gnu.org/licenses/>.  

function getSelectedText(event) {
	// Stores selected text in event.userInfo.
	safari.self.tab.setContextMenuEventUserInfo(
		event, window.getSelection().toString());
}

document.addEventListener("contextmenu", getSelectedText, false);
