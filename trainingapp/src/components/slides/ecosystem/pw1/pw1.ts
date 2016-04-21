import {Component, Inject, ElementRef} from 'angular2/core';

import {SlideCommon} from '../../slideCommon/slideCommon';
import {Editor} from '../../../editor/editor';
import {EditorTab} from '../../../editorTab/editorTab';

import {HOST_SLIDE_CONTAINER_CLASS} from '../../../../services/constants';


@Component({
	selector:'Pw1',
	templateUrl:'src/components/slides/ecosystem/pw1/pw1.html',
	styleUrls: ['src/components/slides/ecosystem/pw1/pw1.css'],
    directives: [Editor, EditorTab]
})
export class Pw1 extends SlideCommon{
	constructor(elt: ElementRef, @Inject(HOST_SLIDE_CONTAINER_CLASS) hostClass: string) {
		super(elt, hostClass);
	}
}