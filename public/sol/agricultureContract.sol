pragma solidity ^0.4.23;
pragma experimental ABIEncoderV2;

contract agricultureContract {

    uint8 numberOfProducts; // 총 제품의 수입니다.
    address contractOwner;

    struct myStruct {
        string capsuleName;
        string capsuleContent;
        string capsuleEmail;
        string promiseDay;
        string walletAddress;
        uint timestamp;
    }

    myStruct[] public productes;

    constructor() public {    
        contractOwner = msg.sender;
    }

    function addProStru (string _firstString, string _secondString, string _thirdString, string _fourthString, string _fifthString) public {
        productes.push(myStruct(_firstString,_secondString,_thirdString,_fourthString, _fifthString, now)) -1;
        numberOfProducts++;
    }

    //제품 등록의 수를 리턴합니다.
    function getNumOfProducts() public constant returns(uint8) {
        return numberOfProducts;
    }
    
    function getAllproducts() public view returns (myStruct[]) {
        return productes;
        
    }

    //번호에 해당하는 제품의 이름을 리턴합니다.
    function getProductStruct(uint _index) public view returns (string, string, string,string,string, uint) {
        return (productes[_index].capsuleName, productes[_index].capsuleContent, productes[_index].capsuleEmail,  productes[_index].promiseDay, productes[_index].walletAddress, productes[_index].timestamp);
    }

    //컨트랙트를 삭제합니다.
    function killContract() public {
        if(contractOwner == msg.sender)
            selfdestruct(contractOwner);
    }
}