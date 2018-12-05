class Params {
	constructor(num, addr) {
		this.num = num;
		this.addr = addr;	
	}
}
class StackX {
	constructor(s) {
		this.maxSize = s;
		this.stackArr = [];
		this.top = -1;
	}
	push(_ob) {
		this.stackArr[++this.top] = _ob;
	}
	pop() {
		return this.stackArr[this.top--];
	}
	peek() {
		return this.stackArr[this.top];
	}
}
function triangle() {
	var stack = new StackX(100);
	var code = 1;
	var step = wrapperstep(code, stack);
	while(step() == false);
}
function wrapperstep(c, s) {
	var code = c, stack = s, params, answer = 0;
	return function() {
        switch(code) {
            case 1:
                params = new Params(5, 5);
                stack.push(params);
                code = 2;
                break;
            case 2:
				params = stack.peek();
                if(params.num == 1) {
					code = 4;
                } else {
					code = 3;
				}
                break;
			case 3:
				params = new Params(params.num - 1, 4);
                stack.push(params);
				code = 2;
                break;
            case 4:
				params = stack.pop();
				answer += params.num;
				code = params.addr;
                break;
			case 5:
                return true;
        }
		return false;
	}
}
// or simpler
function triangle() {
	var stack = new StackX(100);
	var answer = 0, num = 10;
	while(num > 0) {
		stack.push(num);
		num--;
	}
	while(!stack.isEmpty()) {
		answer += stack.pop();
	}
	return answer;
}