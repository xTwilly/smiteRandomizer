package randomizer;

public class Thoth extends godClass{ 
    public Thoth() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Thoth test = new Thoth();
    System.out.println(test.getDamageType());
    }
}
