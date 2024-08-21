package randomizer;

public class Cu_Chulainn extends godClass{ 
    public Cu_Chulainn() {
    	 this.role = "Solo";
         this.damageType = "Physical";
         this.gameDefinedClass = "Warrior";
    }


public static void main(String args[]){
    Cu_Chulainn test = new Cu_Chulainn();
    System.out.println(test.getDamageType());
    }
}
