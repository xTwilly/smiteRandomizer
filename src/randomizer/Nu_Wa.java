package randomizer;

public class Nu_Wa extends godClass{ 
    public Nu_Wa() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Nu_Wa test = new Nu_Wa();
    System.out.println(test.getDamageType());
    }
}
