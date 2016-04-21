import {Component, Inject, ElementRef} from 'angular2/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'MoreDI6',
	templateUrl:'src/components/slides/mainConcepts/moreDI6/moreDI6.html',
	styleUrls: ['src/components/slides/mainConcepts/moreDI6/moreDI6.css'],
    directives: [Editor, EditorTab]
})
export class MoreDI6 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}